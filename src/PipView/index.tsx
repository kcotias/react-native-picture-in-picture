import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from "react-native-reanimated";
import { clamp } from "react-native-redash";

import Card from "../components/Card";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface GestureProps {
  width: number;
  height: number;
}

const PipView = ({
  width,
  height,
  containerStyles,
  children,
}: GestureProps) => {
  const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
  const boundX = deviceWidth - width;
  const boundY = deviceHeight - height;
  const translateX = useSharedValue(deviceWidth - width / 0.95);
  const translateY = useSharedValue(deviceHeight - height / 0.8);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.offsetX = translateX.value;
      context.offsetY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = clamp(context.offsetX + event.translationX, 0, boundX);
      translateY.value = clamp(context.offsetY + event.translationY, 0, boundY);
    },
    onEnd: event => {
      translateX.value = withDecay({
        velocity: event.velocityX,
        clamp: [0, boundX],
      });
      translateY.value = withDecay({
        velocity: event.velocityY,
        clamp: [0, boundY],
      });
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      position: "absolute",
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <PanGestureHandler {...{ onGestureEvent }}>
      <Animated.View {...{ style }}>
        <Card
          containerStyles={containerStyles}
          containerHeight={width}
          containerWidth={height}
        >
          {children}
        </Card>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default PipView;
