import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type Engine, type IOptions, type RecursivePartial } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

import { techIcons } from "../../../data";
import WindowLoading from './WindowLoading';


const partialOptions: RecursivePartial<IOptions> = {
  fullScreen: { enable: false },
  detectRetina: true,

  particles: {
    number: { value: 0 },
    shape: { type: "image" },

    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      straight: false,
      decay: 0,
      outModes: { default: "bounce" },
    },

    collisions: {
      enable: true,
      mode: "bounce",
      maxSpeed: 4,
      overlap: { enable: true, retries: 0 },
    },

    size: {
      value: { min: 14, max: 18 },
      animation: {
        enable: true,
        speed: 3,
        sync: true,
        startValue: "min"
      },
    },

    opacity: {
      value: { min: 0.25, max: 0.75 },
      animation: {
        enable: true,
        speed: 0.375,
        sync: true,
        startValue: "min"
      },
    },

    rotate: {
      value: 0,
      direction: "clockwise",
      animation: {
        enable: true,
        speed: 2,
        sync: true,
      },
    },
  },

  interactivity: {
    detectsOn: "window",

    events: {
      onHover: { enable: true, mode: ["bubble"] },
      onClick: { enable: true, mode: ["repulse"] },
      resize: { enable: true },
    },

    modes: {
      bubble: {
        distance: 144,
        duration: 1.5,
        size: 28,
        opacity: 1.5,
      },
      repulse: {
        distance: 128,
        duration: 1,
      },
    },
  },
};


const BubbleParticles = () => {
  const [initEngine, setInitEngine] = useState(false);
  const [initContainer, setInitContainer] = useState(false);


  useEffect(() => {
    let isMounted = true;

    const initializeEngine = async () => {
      await initParticlesEngine(async (engine: Engine) => {
        await loadSlim(engine);
      });

      if (isMounted)
        setInitEngine(true);
    }

    initializeEngine();

    return () => {
      isMounted = false;
    };
  }, []);


  const particlesLoaded = async (container?: Container) => {
    if (!container)
      return;

    await container.refresh();
    container.particles.clear();

    techIcons.forEach((src, i) => {
      const pos = {
        x: (container.canvas.size.width * (i + 1)) / (techIcons.length + 1),
        y: (((container.canvas.size.height * 2) / 3) * Math.random()) + ((container.canvas.size.height * 1) / 6)
      };

      container.particles.addParticle(pos, {
        shape: {
          type: "image",
          options: { image: { src, width: 24, height: 24 } }
        }
      });
    });

    setInitContainer(true);
  };



  return (
    <>
      {(!initEngine || !initContainer) && <WindowLoading />}

      {initEngine && (
        <Particles
          key={"tech-bubbles"}
          id="tech-bubbles"
          particlesLoaded={particlesLoaded}
          options={partialOptions}
          className="w-full h-full"
        />
      )}
    </>
  )
}

export default BubbleParticles;
