const data = [
    {
        id: 1,
        text: "Fin de la pobreza",
        icono: "people-group-solid.svg",
        content:
            "Reducción de la Pobreza: Meta: Reducir al menos a la mitad la proporción de personas que viven en pobreza en todas sus dimensiones según las definiciones nacionales. Acceso a Recursos y Servicios: Meta: Asegurar que todas las personas tengan acceso a los recursos necesarios y servicios esenciales, como educación, salud y protección social. Medidas de Protección Social: Meta: Implementar sistemas y medidas adecuadas para proteger a los pobres y los más vulnerables, incluyendo una cobertura universal de la seguridad social.",
        type: "text",
    },
    {
        id: 2,
        text: "Hambre cero",
        icono: "bowl-food-solid.svg",
        content:
            "Erradicar el Hambre: Meta: Poner fin al hambre y asegurar que todas las personas, en particular los más vulnerables, tengan acceso a alimentos suficientes y nutritivos durante todo el año. Fin de la Malnutrición: Meta: Terminar con todas las formas de malnutrición, incluyendo el hambre y la desnutrición infantil, y abordar los problemas de sobrepeso y obesidad. Asegurar el Acceso a los Recursos Alimentarios: Meta: Asegurar el acceso de pequeños agricultores a tierras productivas, semillas, fertilizantes y otros insumos agrícolas, así como a los mercados. Invertir en Investigación y Desarrollo: Meta: Apoyar la investigación y el desarrollo en el sector agrícola para mejorar la producción y el acceso a alimentos.",
        type: "text",
    },
    {
        id: 3,
        text: "Educación de calidad",
        icono: "graduation-cap-solid.svg",
        content:
            "Reducción de Mortalidad Infantil ~Fin de las Epidemias ~Reducir Mortalidad Materna ~Cobertura Universal de Salud ~Reducción de Lesiones y Muertes por Accidentes ~Salud Mental y Bienestar ~Acceso a la Salud Reproductiva ~Universalización del Acceso a Servicios de Salud",
        type: "list",
    },
    {
        id: 4,
        text: "Salud y bienestar",
        icono: "suitcase-medical-solid.svg",
        content:
            "Educación Primaria y Secundaria Gratuita y Equitativa ~Acceso a la Educación Preescolar ~Acceso a la Formación Técnica y Superior ~Alfabetización y Numeración ~Educación para el Desarrollo Sostenible ~Hacer la Educación Inclusiva ~Formación de Docentes ~Educación para la Paz y los Derechos Humanos",
        type: "list",
    },
    {
        id: 5,
        text: "Igualdad de género",
        icono: "venus-mars-solid.svg",
        content:
            "Eliminar la Violencia de Género ~Eliminar Prácticas Nocivas ~Participación en la Toma de Decisiones ~Acceso a los Derechos Sexuales y Reproductivos ~Responsabilidad en el Trabajo de Cuidado ~Empoderamiento Económico ~Acceso a Educación y Capacitación ~Participación en la Ciencia y Tecnología",
        type: "list",
    },
    {
        id: 6,
        text: "Agua limpia y saneamiento",
        icono: "glass-water-solid.svg",
        content:
            "Acceso Universal al Agua Potable ~ Acceso a Saneamiento y Higiene ~ Agua de Calidad y Eficiencia ~ Reuso de Agua y Recursos Hídricos ~ Protección de los Recursos Hídricos ~ Cooperación Internacional en Gestión del Agua",
        type: "list",
    },
    {
        id: 7,
        text: "Energía asequible y no contaminante",
        icono: "lightbulb-regular.svg",
        content:
            "Aceleración de la Energía Renovable ~Transición Energética Justa ~Innovación y Eficiencia ~Políticas y Regulaciones",
        type: "list",
    },
    {
        id: 8,
        text: "Trabajo decente y crecimiento económico",
        icono: "briefcase-solid.svg",
        content:
            "Crecimiento Económico Sostenido ~Productividad del Trabajo ~Empleo Pleno y Productivo ~Trabajo Juvenil ~Trabajo Forzoso y Trabajo Infantil ~Acceso a Recursos Financieros ~Desarrollo de Políticas en Políticas Laborales ~Crecimiento del PIB en Países en Desarrollo",
        type: "list",
    },
    {
        id: 9,
        text: "Industria, innovación e infraestructura",
        icono: "road-bridge-solid.svg",
        content:
            "Desarrollo de Infraestructuras Resilientes ~Industrialización Inclusiva y Sostenible ~Aumentar la Participación de la Industria en el PIB ~Promover la Innovación y la Investigación ~Apoyo a las Microempresas e Industrias ~Sostenibilidad de Infraestructuras de Transporte ~Reducción del Impacto Ambiental",
        type: "list",
    },
    {
        id: 10,
        text: "Reducción de las desigualdades",
        icono: "not-equal-solid.svg",
        content:
            "Reducir la Desigualdad de Ingresos ~Progresos de los Países en Desarrollo ~Acceso a Servicios y Oportunidades ~Reducción de la Pobreza ~Acceso a la Educación y Capacitación ~Participación Inclusiva en la Toma de Decisiones ~Desigualdades en el Mercado Laboral",
        type: "list",
    },
    {
        id: 11,
        text: "Ciudades y comunidades sostenibles",
        icono: "city-solid.svg",
        content:
            "Planificación Urbana Sostenible ~Transporte Sostenible ~Reducción de la Contaminación ~Resiliencia y Adaptación al Cambio Climático ~Acceso a Servicios Básicos ~Participación Comunitaria ~Vivienda Asequible",
        type: "list",
    },
    {
        id: 12,
        text: "Producción y consumo responsable",
        icono: "infinity-solid.svg",
        content:
            "Economía Circular ~Eficiencia en el Uso de Recursos ~Producción Responsable ~Consumo Sostenible ~Reducción de Desperdicios ~Innovación y Tecnología",
        type: "list",
    },
    {
        id: 13,
        text: "Acción por el clima",
        icono: "earth-americas-solid.svg",
        content:
            "Reducción de Emisiones de Gases de Efecto Invernadero (GEI) ~Adaptación al Cambio Climático ~Financiamiento Climático ~Innovación Tecnológica ~Políticas y Regulaciones ~Educación y Conciencia",
        type: "list",
    },
    {
        id: 14,
        text: "Vida de ecosistemas terrestres",
        icono: "tree-solid.svg",
        content:
            "Protección y Restauración de Ecosistemas ~Gestión Sostenible de los Bosques ~Lucha contra la Desertificación ~Detención de la Pérdida de Biodiversidad ~Agricultura Sostenible ~Educación y Conciencia",
        type: "list",
    },
    {
        id: 15,
        text: "Vida submarina",
        icono: "fish-solid.svg",
        content:
            "Protección de Ecosistemas Marinos ~Pesca Sostenible ~Reducción de la Contaminación ~Cambio Climático y Acidificación ~Investigación y Tecnología ~Educación y Conciencia",
        type: "list",
    },
    {
        id: 16,
        text: "Paz, justicia e instituciones sólidas",
        icono: "dove-solid.svg",
        content:
            "Fortalecimiento de Instituciones ~Acceso a la Justicia ~Prevención y Resolución de Conflictos ~Promoción de la Inclusión y la Participación ~Lucha Contra la Corrupción ~Educación y Conciencia",
        type: "list",
    },
    {
        id: 17,
        text: "Alianza para lograr objetivos",
        icono: "scale-balanced-solid.svg",
        content:
            "Fortalecimiento de Alianzas Multilateral ~Colaboración Público-Privada ~Participación de la Sociedad Civil ~Cooperación Sur-Sur y Triangular ~Innovación y Tecnología ~Monitoreo y Evaluación",
        type: "list",
    },
];

export default data;
