import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesjsConfigSnow from "../ConfigParticles/particles-config-snow";
const ParticlesBackgroundSnow = () => {
    const particlesInit = useCallback((engine) => {
        loadFull(engine)
    }, [])
    return (
        <div>
            <Particles
                options={particlesjsConfigSnow}
                init={particlesInit}
                container={{responsiveMaxWidth:1}}
            />
        </div>
    );
}

export default ParticlesBackgroundSnow;