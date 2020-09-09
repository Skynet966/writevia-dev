import Editor from '@editorjs/editorjs';
export default class EditorJS extends React.Component{
    constructor(props){
        super(props);
        this.state={editorJS:null};
    }
    componentDidMount(){
        const editor = new Editor({
            placeholder: 'Let`s write an awesome post!'
        });
        editor.isReady
            .then(() => {
                console.log('Editor.js is ready to work!')
                /** Do anything you need after editor initialization */
            })
            .catch((reason) => {
                console.log(`Editor.js initialization failed because of ${reason}`)
            });
        this.setState({editorJS:editor});
    }
    savedata(){
        this.state.editorJS.save().then((output)=>{
            console.log('Output data from editor:::',output);
        }).catch((err)=>{
            console.log("There is some error in editor",err);
        })
    }
    render(){
        return( 
            <>
                <div id="editorjs" className="container p-3"/>
                <button onClick={this.savedata.bind(this)} className="btn btn-secondary">save data</button>
            </>
        )
    }
}