
        class App extends React.Component {
            constructor(props){
                super();
                this.state={
                    headerValue : props.headerValue,
                    message : 'InitialMessage'
                };
            }

            render() {
               return (
                  <div>
                      <h1> Main Component !!! </h1> <br/>
                            Here Main Component Message from Child Display <b>{this.state.headerValue}</b>
                      <hr/>
                      <Display
                          dispMessage={" Props from Parent to Display Message"}
                          sentMessage={this.state.message}/>
                      <hr/>
                      <Form formMessage={"Props from Parent to Form Message"}
                            age={10}
                            newHeader={this.headerValueChange.bind(this)}
                            textValueChange={this.textChange.bind(this)}/>

                  </div>
               );
            }

            headerValueChange(){
                this.setState({
                    headerValue:'Header Changed with New Value',
                }
                );
            }


            textChange(age){
                this.setState({
                    message:age
                    }
                );
            }

         }

         class Display extends React.Component{

            constructor(props){
                 super();
             }

             render() {
                 return (
                     <div>
                         <h2>Display Message Component !!! </h2><br/>
                         Message {this.props.dispMessage} <br/>
                         Message sent {this.props.sentMessage}
                     </div>
                 );
             }
         }

        class Form extends React.Component{

            constructor(props){
                super();
                this.state={
                    sAge : ''
                }
            }

            changeTextValue(event){
                this.setState({
                    sAge: event.target.value
                });


            }


            render() {
                return (
                    <div>
                        <h2>Form Message Component !!! </h2> <br/>
                        
                         Message {this.props.formMessage} <br/>
                         Enter value : <input type='text' value={this.state.sAge} onChange={(event) => this.changeTextValue(event)}/> <br/> <br/>
                        <button onClick={() => this.props.newHeader(this)}> Click To Change Parent Header</button>
                        <button onClick={() => this.props.textValueChange(this.state.sAge)}> Click To Submit Text Value ( Form To  Display) </button>
                    </div>
                );
            }
        }
    
         ReactDOM.render(<App headerValue={"Main Value"}/>, document.getElementById('appDiv'));