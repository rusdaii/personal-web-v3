'use client';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { motion } from 'framer-motion';

const animation = {
  hide: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

const AnimationCard = () => {
  return (
    <motion.div
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 1.3 }}
      className="col-span-9 hidden lg:block bg-white rounded-2xl p-5 bento-card"
    >
      <div className="flex justify-center items-center">
        <DotLottiePlayer
          autoplay
          loop={true}
          src={`https://lottie.host/9fad915d-8462-40ab-af8c-4349497d45d3/OfnRp4Qhv4.lottie`}
          style={{
            width: '50%',
            height: '90%',
          }}
        />
      </div>
    </motion.div>
  );
};

export default AnimationCard;
