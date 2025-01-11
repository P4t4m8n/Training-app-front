import { MouseEvent, useRef, useState } from "react";
import { PauseSvg, PlayBtnSvg } from "../UI/Icons/IconsSvg";
import { TVideo } from "../../types/video.type";
import ProgressBar from "./ProgressBar";
import { useModel } from "../../hooks/useModel";
import Button from "../UI/Button";

interface Props {
  video: TVideo;
}
export default function VideoPlayerIndex({ video }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const modelRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useModel(modelRef);

  const handlePlay = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
      return;
    }
    videoRef.current?.play();
    setIsPlaying(true);
  };

  return (
    <div>
      <Button styleMode="none" styleSize="none" onClick={() => setIsOpen(true)}>
        <video
          ref={videoRef}
          src={video.url}
          className="w-24 h-24 rounded object-cover"
        ></video>
      </Button>
      {isOpen && (
        <div
          ref={modelRef}
          className="fixed p-4 top-16 left-0 w-full h-[calc(100svh-8rem)] bg-white flex flex-col gap-2"
        >
          <Button
            styleMode="none"
            styleSize="none"
            className="border rounded p-1 w-8 aspect-square"
            onClick={() => setIsOpen(false)}
          >
            X
          </Button>
          <div className="w-full h-full relative">
            <video
              ref={videoRef}
              src={video.url}
              className="w-full h-full object-cover"
              onEnded={() => setIsPlaying(false)}
            ></video>

            <Button
              styleMode="none"
              styleSize="none"
              className="h-12 aspect-square  fill-black absolute top-[calc(100%-2rem)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border rounded-full flex items-center justify-center"
              onClick={(e) => handlePlay(e)}
            >
              {isPlaying ? (
                <PauseSvg className="aspect-square h-8" />
              ) : (
                <PlayBtnSvg className="aspect-square h-full" />
              )}
            </Button>

            <ProgressBar videoRef={videoRef} />
          </div>
        </div>
      )}
    </div>
  );
}
