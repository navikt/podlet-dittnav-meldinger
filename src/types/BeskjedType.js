import { shape, string, number, arrayOf } from "prop-types";

const BeskjedType = shape({
  uid: string,
  eventId: string.isRequired,
  tekst: string.isRequired,
  sikkerhetsnivaa: number.isRequired,
  link: string,
});

export default BeskjedType;
