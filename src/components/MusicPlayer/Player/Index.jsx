import React from 'react'

const Player = ({onLoadedMetadata, onTimeUpdate, reference, src}) => {
    return (
        <audio
            src={src}
            ref={reference}
            onLoadedMetadata={onLoadedMetadata}
            onTimeUpdate={onTimeUpdate}
            controls={false} // Desabilita/Habilita os controles padrão
        />
    )
}

export default Player