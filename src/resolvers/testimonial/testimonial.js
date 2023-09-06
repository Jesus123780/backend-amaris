import { ApolloError } from "apollo-server-express";
import Testimonial from "../../models/testimonials";

const testimonials = [
  {
    tId: '1',
    title: 'Gran experiencia con el producto',
    description: 'He tenido una gran experiencia utilizando este producto. Es fácil de usar y ha mejorado mi vida en muchos aspectos.',
    clientId: '101',
    TState: 5,
    createAt: '2023-09-06T12:00:00Z',
  },
  {
    tId: '2',
    title: 'Muy recomendado',
    description: 'Recomiendo encarecidamente este producto a cualquiera que esté buscando una solución efectiva y confiable. ¡Funciona de maravilla!',
    clientId: '102',
    TState: 4,
    createAt: '2023-09-07T13:30:00Z',
  },
  {
    tId: '3',
    title: 'Excelente servicio al cliente',
    description: 'El servicio al cliente de esta empresa es excepcional. Siempre están dispuestos a ayudar y responder a mis preguntas de manera oportuna.',
    clientId: '103',
    TState: 5,
    createAt: '2023-09-08T15:45:00Z',
  }
];

export const getTestimonials = async (root, input) => {
  try {
    // const testimonials = await Testimonial.findAll();
    return testimonials;
  } catch (e) {
    console.log(e);
    const error = new ApolloError(
      "Lo sentimos, ha ocurrido un error interno",
      500
    );
    return error;
  }
};

export const getTestimonial = async (root, { id }) => {
  try {
    const testimonial = await Testimonial.findOne({
      where: { tId: id },
    });

    if (!testimonial) {
      throw new ApolloError("Testimonial no encontrado", 404);
    }

    return testimonial;
  } catch (e) {
    console.log(e);
    const error = new ApolloError(
      "Lo sentimos, ha ocurrido un error interno",
      400
    );
    return error;
  }
};

export const getOneTestimonial = async (root, { id }) => {
  try {
    const testimonial = await Testimonial.findOne({
      where: { clientId: id },
    });

    if (!testimonial) {
      throw new ApolloError("Testimonial no encontrado", 404);
    }

    return testimonial;
  } catch (e) {
    console.log(e);
    const error = new ApolloError(
      "Lo sentimos, ha ocurrido un error interno",
      400
    );
    return error;
  }
};

export const newRegisterTestimonial = async (root, { input }) => {
  try {
    const testimonial = await Testimonial.create(input);
    return testimonial;
  } catch (e) {
    console.log(e);
    const error = new ApolloError(
      "Lo sentimos, ha ocurrido un error interno al registrar el testimonio",
      400
    );
    return error;
  }
};

export default {
  TYPES: {},
  QUERIES: {
    getTestimonials,
    getTestimonial,
    getOneTestimonial,
  },
  MUTATIONS: {
    newRegisterTestimonial
  },
};
