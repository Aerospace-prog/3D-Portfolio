import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
  );

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      ease: "sine.inOut",
    });

    tl.to(targetRef.current.rotation, {
      y: targetRef.current.rotation.y + Math.PI / 12,
      duration: 2,
      ease: "sine.inOut",
    }, "<");

    tl.to(targetRef.current.scale, {
      x: 1.7,
      y: 1.7,
      z: 1.7,
      duration: 1.5,
      ease: "sine.inOut",
    }, "<");
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
