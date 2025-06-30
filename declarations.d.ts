// declarations.d.ts

// 1) Importamos para activar el merge con el módulo original
import "react-native";
import "expo-linear-gradient";

declare module "react-native" {
  // Extiende las props de View/Text/Image para añadir className
  interface ViewProps {
    className?: string;
  }
  interface TextProps {
    className?: string;
  }
  interface ImageProps {
    className?: string;
  }
}

declare module "expo-linear-gradient" {
  import type { ViewProps } from "react-native";
  import type React from "react";

  // Extiende las props originales de LinearGradient
  interface LinearGradientProps extends ViewProps {
    colors: string[];
    start?: [number, number];
    end?: [number, number];
    locations?: number[];
    className?: string;
    children?: React.ReactNode;
  }

  // Exportamos la definición correcta
  export const LinearGradient: React.ComponentType<LinearGradientProps>;
}
