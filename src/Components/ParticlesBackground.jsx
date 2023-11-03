import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesjsConfig from "../ConfigParticles/particlesjs-config";
const ParticlesBackground = () => {
    const particlesInit = useCallback((engine) => {
        loadFull(engine)
    }, [])
    return (
        <div>
            <Particles
                options={particlesjsConfig}
                init={particlesInit}
                container={{responsiveMaxWidth:1}}
            />
        </div>
    );
}

export default ParticlesBackground;