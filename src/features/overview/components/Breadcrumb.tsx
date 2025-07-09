// src/components/Breadcrumb.tsx
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import tw from "twrnc";

export type Crumb = {
  label: string;
  onPress?: () => void;
};

type BreadcrumbProps = {
  items: Crumb[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <View style={styles.container}>
      {items.map((crumb, index) => (
        <React.Fragment key={index}>
          {crumb.onPress ? (
            <Pressable
              onPress={crumb.onPress}
              style={({ pressed }) => [
                styles.pressable,
                pressed && styles.pressed,
              ]}
            >
              <Text style={[styles.text, styles.link]}>{crumb.label}</Text>
            </Pressable>
          ) : (
            <Text style={[styles.text, styles.current]}>{crumb.label}</Text>
          )}

          {index < items.length - 1 && <Text style={styles.separator}>/</Text>}
        </React.Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: tw`flex-row items-center`,
  text: tw`text-sm`,
  link: tw`text-blue-600`,
  current: tw`text-gray-700`,
  separator: tw`text-gray-500 mx-1`,
  pressable: tw`px-1`,
  pressed: tw`opacity-50`,
});
