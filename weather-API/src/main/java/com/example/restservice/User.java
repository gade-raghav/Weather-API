package com.example.restservice;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity // This tells Hibernate to make a table out of this class
@Table(name = "Users_Weather")
public class User {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  @Column
  public Integer id;

  @Column
  public String name;

  @Column
  public String favourite;


  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getFavourite() {
    return favourite;
  }

  public void setFavourite(String favourite) {
    this.favourite = favourite;
  }

  public User() {
    
  }

  
  public User(String name, String favourite) {
    this.setName(name);
    this.setFavourite(favourite);
  }

  public User(int id, String name, String favourite){
    this.setId(id);
    this.setName(name);
    this.setFavourite(favourite);

  }

  
   @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ",name ='" + name + '\'' +
                ", favourite='" + favourite + '\'' +
                '}';
    }
}