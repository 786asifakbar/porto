import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function CursorParticles() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        particles: {
          number: { value: 0 },
          shape: {
            type: "star"
          },
          size: {
            value: 6
          },
          move: {
            enable: true,
            speed: 3
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "trail"
            }
          },
          modes: {
            trail: {
              delay: 0.005,
              quantity: 5
            }
          }
        }
      }}
    />
  );
}

