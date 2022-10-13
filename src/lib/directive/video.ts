export default function video(node: HTMLVideoElement, stream: MediaStream) {
  node.srcObject = stream;
}
