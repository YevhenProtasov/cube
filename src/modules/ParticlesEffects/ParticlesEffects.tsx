import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import "./ParticlesEffects.scss";
import particlePill from '../../assets/icon/pill.svg';

type Props = {
  idFor: string;
}

export const ParticlesEffects: React.FC<Props> = ({idFor}) => {
const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false
      },
      background: {
        color: {
          value: 'transparet',
        },
      },
      fpsLimit: 60,
      duration: 0,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#464753",
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: {
            min: 0.1, max: 1
          },
          straight: false,
        },
        rotate: {
          enable: true,
          direction: "random",
          animation: {
            enable: true,
            speed: 5
          }
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        // opacity: {
        //   value: {
        //     min: 0.6,
        //     max: 1,
        //   },
        // },
        shape: {
          type: 'image',
          options: {
            image: [
              {
                src: particlePill,
                width: 1,
                height: 2,
              },
            ]
          }
        },
        size: {
          value: { min: 0.3, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id={idFor}
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
}
