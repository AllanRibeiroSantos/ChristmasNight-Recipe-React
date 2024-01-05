import { MapaEventoWrapper } from "./styles";

export default function MapaEvento() {
  return (
    <MapaEventoWrapper >
      <div className="mapa__container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7315.241459045782!2d-46.729166173445705!3d-23.546139888761587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5623e52d5db7%3A0x34278d9d0460f189!2sAv.%20Prof.%20Fonseca%20Rodrigues%2C%202001%20-%20Alto%20de%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005461-010!5e0!3m2!1spt-BR!2sbr!4v1671645611585!5m2!1spt-BR!2sbr"
          width="90%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </MapaEventoWrapper>
  )
}