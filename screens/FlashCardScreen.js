import React from 'react';
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
} from 'react-native';
import FlipButton from '../components/FlipButton';
import FlashCard from '../components/FlashCard';
import AnswerChoices from '../components/AnswerChoices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  flashcard: {
    flex: 6,
  },
  buttons: {
    flex: 2,
  },
});

export default class FlashCardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
      flashCardContent: [
        {
          question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          answer: 'Lorem ipsum dolor sit amet.',
          color: '',
        },
        {
          question: 'Donec bibendum velit lorem, ac commodo lacus convallis a.',
          answer: 'Donec bibendum velit lorem.',
          color: '',
        },
        {
          question: 'Integer eu malesuada mi, a lobortis massa.',
          answer: 'Integer eu malesuada mi.',
          color: '',
        },
        {
          question: 'Eget duis at tellus at urna condimentum. Viverra nibh cras pulvinar mattis.',
          answer: 'Viverra nibh cras pulvinar mattis.',
          color: '',
        },
        {
          question: 'Neque aliquam vestibulum morbi blandit cursus. Ut enim blandit volutpat maecenas volutpat blandit.',
          answer: 'Ut enim blandit volutpat maecenas volutpat blandit.',
          color: '',
        },
        {
          question: 'Arcu cursus vitae congue mauris rhoncus aenean.',
          answer: 'Arcu cursus vitae.',
          color: '',
        },
        {
          question: 'Condimentum lacinia quis vel eros donec ac. Interdum velit laoreet id donec.',
          answer: 'Interdum velit laoreet id donec.',
          color: '',
        },
        {
          question: 'Erat pellentesque adipiscing commodo elit. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. ',
          answer: 'Erat pellentesque adipiscing commodo elit.',
          color: '',
        },
        {
          question: 'Nisl purus in mollis nunc sed id semper risus in.',
          answer: 'Nisl purus in mollis nunc.',
          color: '',
        },
        {
          question: 'Volutpat diam ut venenatis tellus in metus vulputate eu.',
          answer: 'Volutpat diam ut venenatis.',
          color: '',
        },
        {
          question: 'Volutpat lacus laoreet non curabitur gravida arcu ac.',
          answer: 'Volutpat lacus laoreet non.',
          color: '',
        },
      ],
      current: 0,
    };
  }

  componentWillMount() {
    this.animatedValue = new Animated.ValueXY();
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {

      },
      onPanResponderMove: Animated.event([
        null, { dx: this.animatedValue.x, dy: this.animatedValue.y },
      ]),
      onPanResponderRelease: (evt, gestureState) => {
        const { dx } = gestureState;

        const { current, flashCardContent, flipped } = this.state;
        if (dx > 100 && current < flashCardContent.length - 1) {
          this.setState(previousState => (
            {
              current: previousState.current + 1,
            }
          ));
          if (flipped === true) {
            this.setState(previousState => (
              {
                flipped: !previousState.flipped,
              }
            ));
          }
          this.animatedValue.setValue({ x: 0, y: 0 });
        } else if (dx < -100 && current > 0) {
          this.setState(previousState => (
            {
              current: previousState.current - 1,
            }
          ));
          if (flipped === true) {
            this.setState(previousState => (
              {
                flipped: !previousState.flipped,
              }
            ));
          }
          this.animatedValue.setValue({ x: 0, y: 0 });
        } else {
          Animated.spring(this.animatedValue, {
            toValue: { x: 0, y: 0 },
            friction: 5,
          }).start();
        }
      },
    });
  }

  componentDidMount() {
    const { flashCardContent } = this.state;
    if (flashCardContent[0].color === '') {
      const updatedFlashCardContent = flashCardContent.map(
        content => ({ ...content, color: this.generateRandomHexCode() }),
      );

      this.setState({
        flashCardContent: updatedFlashCardContent,
      });
    }
  }

  flippedIt = () => {
    this.setState(previousState => (
      {
        flipped: !previousState.flipped,
      }
    ));
  }

  generateRandomHexCode = () => `#${Math.random().toString(16).slice(2, 8)}`;

  render() {
    const { flipped, flashCardContent, current } = this.state;
    const animatedStyle = {
      transform: this.animatedValue.getTranslateTransform(),
    };
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.flashcard, animatedStyle]}
          {...this.panResponder.panHandlers}
        >
          <FlashCard
            flipped={flipped}
            question={flashCardContent[current].question}
            answer={flashCardContent[current].answer}
            bg={flashCardContent[current].color}
          />
        </Animated.View>
        <View style={styles.buttons}>
          <FlipButton
            flip={this.flippedIt}
          />
          <AnswerChoices
            flipped={flipped}
          />
        </View>
      </View>
    );
  }
}
