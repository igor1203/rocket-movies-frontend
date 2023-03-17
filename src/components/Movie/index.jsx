import { Container } from "./styles";
import { Tag } from "../Tag";
import { Rating } from "../Rating";

export function Movie({ data, ...rest }){
  console.log(data.tags)
  return(
    <Container {...rest}>
      <div className="wrapper_header">
        <h1>{data.title}</h1>

        <Rating grade={data.rating} isBigSize={false} />
        
      </div>

      <div className="wrapper_description">

        <p>{data.description}</p>
      </div>

      {
        data.tags && 

        <footer>
          {
            data.tags.map(tag => {
              return (

                <Tag key={tag.id} title={tag.name} />
              )
            })
          }
        </footer>
      }
    
    </Container>
  );
}