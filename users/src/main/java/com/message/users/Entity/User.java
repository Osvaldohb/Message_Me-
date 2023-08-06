package com.message.users.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@Entity
@Table(name="Users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id;
	
	@Override
	public String toString() {
		return "User [Id=" + Id + ", Nombre=" + Nombre + ", Apodo=" + Apodo + ", Correo=" + Correo + ", Contrasena="
				+ Contrasena + ", Prefijo=" + Prefijo + ", Telefono=" + Telefono + ", getId()=" + getId()
				+ ", getNombre()=" + getNombre() + ", getApodo()=" + getApodo() + ", getCorreo()=" + getCorreo()
				+ ", getContrasena()=" + getContrasena() + ", getPrefijo()=" + getPrefijo() + ", getTelefono()="
				+ getTelefono() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}
	

	public User(long id, String nombre, String apodo, String correo, String contrasena, String prefijo,
			String telefono) {
		super();
		Id = id;
		Nombre = nombre;
		Apodo = apodo;
		Correo = correo;
		Contrasena = contrasena;
		Prefijo = prefijo;
		Telefono = telefono;
	}
	
	public User() {
		
	}


	private String Nombre;
	
	private String Apodo;
	
	private String Correo;
	
	private String Contrasena;
	
	private String Prefijo;
	
	private String Telefono;

	public long getId() {
		return Id;
	}

	public void setId(long id) {
		Id = id;
	}

	public String getNombre() {
		return Nombre;
	}

	public void setNombre(String nombre) {
		Nombre = nombre;
	}

	public String getApodo() {
		return Apodo;
	}

	public void setApodo(String apodo) {
		Apodo = apodo;
	}

	public String getCorreo() {
		return Correo;
	}

	public void setCorreo(String correo) {
		Correo = correo;
	}

	public String getContrasena() {
		return Contrasena;
	}

	public void setContrasena(String contrasena) {
		Contrasena = contrasena;
	}

	public String getPrefijo() {
		return Prefijo;
	}

	public void setPrefijo(String prefijo) {
		Prefijo = prefijo;
	}

	public String getTelefono() {
		return Telefono;
	}

	public void setTelefono(String telefono) {
		Telefono = telefono;
	}
	
	
	

}
