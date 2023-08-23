// Create a file named "use-sound.d.ts" in your project's source directory.
// This assumes the use-sound module is located in "node_modules/use-sound".

declare module 'use-sound' {
  export interface UseSoundProps {
    // Define the type for the props here
    // For example:
    volume?: number;
    soundUrl: string;
  }

  // You can extend or define other types related to the module here.

  const useSound: (props: UseSoundProps) => void;

  export default useSound;
}
