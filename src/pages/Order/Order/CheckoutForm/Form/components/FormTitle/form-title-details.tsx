interface FormTitleDetailsProps {
  title: string
  description: string
}

export function FormTitleDetails({
  title,
  description,
}: FormTitleDetailsProps) {
  return (
    <div>
      <h3>{title}</h3>
      <span>{description}</span>
    </div>
  )
}
