import Link from 'next/link'

type LinkProps = {
    href: string
    title: string
}

const AddButton = ({href, title}: LinkProps) => {
  return (
    <Link href={href} className="bg-blue-900 hover:bg-blue-700 py-2 px-5 rounded-md">{title}</Link>
  )
}

export default AddButton