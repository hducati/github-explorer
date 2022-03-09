import { Repository } from "./RepositoryList"

interface RepositoryItemProps {
  repository: Repository
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>
        Acessar repositório
      </a>
    </li> 
  )
}