export default function SectionSeparator({title, description}: any) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}
