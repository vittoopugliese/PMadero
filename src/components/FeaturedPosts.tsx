import {ExamplePosts} from "../constants/ExampleDatas";
import PostCard from "./PostCard";
import SectionSeparator from "./SectionSeparator";
import ViewAllButton from "./ViewAllButton";

export default function FeaturedPosts() {
  return (
    <section className="featured-section">
      <SectionSeparator
        title="Blog Inmobiliario"
        description="Mantente informado con las últimas novedades del mercado inmobiliario"
      />

      <div className="grid">
        {ExamplePosts.map((post) => (
          <PostCard key={post.id} post={post as any} />
        ))}
      </div>

      <ViewAllButton text="Ver todas las publicaciones" />
    </section>
  );
}
