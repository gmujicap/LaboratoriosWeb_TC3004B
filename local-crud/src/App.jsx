import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Table,Button,Container,FormGroup,
Modal,ModalHeader,ModalBody,ModalFooter,} from "reactstrap";
import React from "react";

const data = [
  { id: 1, nombre: "Gabriel Mujica", empresa: "Heineken", puesto:"CMI Analytics Intern", salario:"8,000", area: "CMI", manager: "María Lopez"},
  { id: 2, nombre: "María López", empresa: "Heineken", puesto: "CMI Analytics Lead", salario: "50,000", area: "CMI", manager: "Armando Carmona" },
  { id: 3, nombre: "Armando Carmona", empresa: "Heineken", puesto: "CMI Sr. Manager", salario: "100,000", area: "CMI", manager: "Renne Villegas" },
  { id: 4, nombre: "Renne Villegas", empresa: "Heineken", puesto: "Consumer & Market Insights Manager", salario: "160,000", area: "CMI", manager: "NA" },
  { id: 5, nombre: "Leonardo Pequeño", empresa: "Heineken", puesto: "CMI Intern", salario: "8,000", area: "CMI", manager: "Francisco Ramirez"},
  { id: 6, nombre: "Francisco Ramirez", empresa: "Heineken", puesto: "CMI Jr. Manager", salario: "50,000", area: "CMI", manager: "Renne Villegas" },
  { id: 7, nombre: "Enrique Ortega", empresa: "Heineken", puesto: "CMI Executive", salario: "35,000", area: "CMI", manager: "Francisco Ramirez" },
]

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      empresa: "",
    },
  };
  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };
  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };
  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };
  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
      arreglo[contador].nombre = dato.nombre;
      arreglo[contador].empresa = dato.empresa;
      arreglo[contador].puesto = dato.puesto;
      arreglo[contador].salario = dato.salario;
      arreglo[contador].area = dato.area;
      arreglo[contador].manager = dato.manager;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
    };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <Container>
          <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Empresa</th>
                <th>Puesto</th>
                <th>Salario</th>
                <th>Área</th>
                <th>Manager</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((dato) => (
              <tr key={dato.id}>
              <td>{dato.id}</td>
              <td>{dato.nombre}</td>
              <td>{dato.empresa}</td>
              <td>{dato.puesto}</td>
              <td>{dato.salario}</td>
              <td>{dato.area}</td>
              <td>{dato.manager}</td>

              <td>
                <Button color="primary" onClick={() => this.mostrarModalActualizar(dato)} >Editar
                </Button>{" "}
                <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
              </td>
              </tr>
              ))}
            </tbody>
          </Table>
        </Container>
  
        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div><h3>Editar Registro</h3></div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label> Id:</label>
              <input className="form-control" readOnly type="text" value={this.state.form.id} />
            </FormGroup>
            <FormGroup>
              <label>Nombre:</label>
              <input className="form-control" name="nombre" type="text"
              onChange={this.handleChange} value={this.state.form.nombre} />
            </FormGroup>
            <FormGroup>
              <label>Empresa:</label>
              <input className="form-control" name="empresa" type="text"
              onChange={this.handleChange} value={this.state.form.empresa} />
            </FormGroup>
            <FormGroup>
              <label>Puesto:</label>
              <input className="form-control" name="puesto" type="text"
              onChange={this.handleChange} value={this.state.form.puesto} />
            </FormGroup>
            <FormGroup>
              <label>Salario:</label>
              <input className="form-control" name="salario" type="text"
              onChange={this.handleChange} value={this.state.form.salario} />
            </FormGroup>
            <FormGroup>
              <label>Área:</label>
              <input className="form-control" name="area" type="text"
              onChange={this.handleChange} value={this.state.form.area} />
            </FormGroup>
            <FormGroup>
              <label>Manager:</label>
              <input className="form-control" name="manager" type="text"
              onChange={this.handleChange} value={this.state.form.manager} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.editar(this.state.form)} >
            Editar</Button>
            <Button color="danger" onClick={() => this.cerrarModalActualizar()} >
            Cancelar</Button>
          </ModalFooter>
        </Modal>
  
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div><h3>Insertar Registro</h3></div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Id: </label>
              <input className="form-control" readOnly type="text" value={this.state.data.length+1} />
            </FormGroup>
            <FormGroup>
              <label>Nombre: </label>
              <input className="form-control" name="nombre" type="text" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <label>Empresa: </label>
              <input className="form-control" name="empresa" type="text" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label>Puesto: </label>
              <input className="form-control" name="puesto" type="text" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label>Salario: </label>
              <input className="form-control" name="salario" type="text" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label>Área: </label>
              <input className="form-control" name="area" type="text" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label>Manager: </label>
              <input className="form-control" name="manager" type="text" onChange={this.handleChange}/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()} >Insertar </Button>
            <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()}
            >Cancelar</Button>
          </ModalFooter>
        </Modal>
      </>
    );  
  }
}


export default App
