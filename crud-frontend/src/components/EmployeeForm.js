import React, { useState, useEffect } from 'react';
import { createEmployee, updateEmployee } from '../services/api';

const EmployeeForm = ({ employee, onSubmitSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    pos: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name || '',
        company: employee.company || '',
        pos: employee.pos || ''
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      setError('El nombre del empleado es obligatorio');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      if (employee) {
        await updateEmployee(employee.id, formData);
      } else {
        await createEmployee(formData);
      }
      
      setFormData({ name: '', company: '', pos: '' });
      if (onSubmitSuccess) onSubmitSuccess();
    } catch (err) {
      setError('Error al guardar el empleado');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      {error && <div className="error">{error}</div>}
      
      <div className="form-group">
        <label htmlFor="name">Nombre*:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={submitting}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="company">Empresa:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          disabled={submitting}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="pos">Puesto:</label>
        <input
          type="text"
          id="pos"
          name="pos"
          value={formData.pos}
          onChange={handleChange}
          disabled={submitting}
        />
      </div>
      
      <div className="form-actions">
        <button type="submit" disabled={submitting}>
          {submitting ? 'Guardando...' : employee ? 'Actualizar' : 'Crear'}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} disabled={submitting}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default EmployeeForm;