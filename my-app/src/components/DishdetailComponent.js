import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}){
    if (dish != null) {
        return(
            <div className="col-sm-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div> 
        );
    }else{
        return (
            <div></div>
        );
    }
}

function RenderComments({comments}){
    if (comments) {
        const commentsComponent = comments.map((comment) => {
            return (
                <ul key={comment.id} className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}, {(new Intl.DateTimeFormat('en-US', {year: "numeric", month: 'short', day:"2-digit"}).format(new Date(Date.parse(comment.date))))}</li>
                </ul>
            );
        });
        return (
            <div className="col-sm-12 col-md-5 m-1"><h4>Comments</h4>{commentsComponent}</div>
        );
    }else{
        return (
            <div></div>
        );
    }
}

const DishDetail = ({dish, comments})=>{
    if(!dish) return(<div></div>);
    return(
        <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={comments} />
                    </div>
                </div>
                </div>
    );
}

export default DishDetail;