'use client';
import { useEffect, useMemo, useState } from 'react';

import { type ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (): Promise<void> => {};

  const options: ISourceOptions = useMemo(
    () => ({
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'bubble',
          },
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 2,
            opacity: 0,
            size: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: { value: '#ffffff' },
        move: {
          direction: 'none',
          enable: true,
          outModes: 'out',
          random: true,
          speed: 0.3,
        },
        number: {
          density: {
            enable: true,
          },
          value: 600,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 5,
          },
          value: { min: 0.3, max: 0.6 },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: 1,
        },
      },
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return null;
};

export default ParticleBackground;
