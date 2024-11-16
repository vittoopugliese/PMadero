import {ExampleProperties} from "../constants/ExampleDatas";
import PropertyCard from "./PropertyCard";
import SectionSeparator from "./SectionSeparator";
import ViewAllButton from "./ViewAllButton";

export default function FeaturedProperties() {
  return (
    <section className="featured-section">
      <SectionSeparator
        title="Propiedades Destacadas"
        description="Descubre nuestra selección de las mejores propiedades disponibles en el mercado"
      />

      <div className="grid">
        {ExampleProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

        <ViewAllButton text="Ver Todas las Propiedades" />
    </section>
  );
}
