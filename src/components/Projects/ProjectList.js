import React, {Component} from 'react'
import Project from './Project'
import Data from './ProjectsListApi'
import Search from './ProjectSearch'

class ProjectList extends Component {
    
    constructor(props){
        super(props);
        this.state = { items: Data.projects, itemsFullList: Data.projects };
        this.filterList = this.filterList.bind(this);

    }
        filterList(text){
            if(text.length === 0){
                return this.setState({items: this.state.itemsFullList});
            }
            var filteredList = this.state.items.filter(function(item){
                return item.description.toLowerCase().search(text.toLowerCase())!== -1;
            }); 
            this.setState({items: filteredList});
        }
    
    render() {

        return(
            <div>
               <Search filter={this.filterList} />
                <ul>
                {   
                    this.state.items.map(function(project){
                        return <Project key={project.id} project={project} />
                    })
                }
                </ul>
            </div>
        )   
    }
}

export default ProjectList




