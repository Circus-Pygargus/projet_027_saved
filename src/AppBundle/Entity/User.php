<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * User
 *
 * @ORM\Table(name="user")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\UserRepository")
 */
class User
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="firstname_user", type="string", length=45)
     */
    private $firstname_user;

    /**
     * @var string
     *
     * @ORM\Column(name="lastname_user", type="string", length=45)
     */
    private $lastname_user;

    /**
     * @var string
     *
     * @ORM\Column(name="city_user", type="string", length=45)
     */
    private $city_user;
/**
     * @var string
     *
     * @ORM\Column(name="email_user", type="string", length=255)
     */
    private $email_user;

    /**
     * @var string
     *
     * @ORM\Column(name="tel_user", type="string", length=45 ,nullable=true)
     */
    private $tel_user;

     /**
     * @var string
     *
     * @ORM\Column(name="last_modif", type="date" )
     */
    private $last_modif;

     /**
     * @var string
     *
     * @ORM\Column(name="date_created", type="date" )
     */
    private $date_created;

     /**
     * @var string
     *
     * @ORM\Column(name="password", type="string", length=45 )
     */
    private $password;

    /**
     * @var array
     *
     * @ORM\Column(name="roles", type="simple_array")
     */
    private $roles;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }



    /**
     * Set roles
     *
     * @param array $roles
     *
     * @return User
     */
    public function setRoles($roles)
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * Get roles
     *
     * @return array
     */
    public function getRoles()
    {
        return $this->roles;
    }

    /**
     * Get the value of firstname_user
     *
     * @return  string
     */ 
    public function getFirstname_user()
    {
        return $this->firstname_user;
    }

    /**
     * Set the value of firstname_user
     *
     * @param  string  $firstname_user
     *
     * @return  self
     */ 
    public function setFirstname_user(string $firstname_user)
    {
        $this->firstname_user = $firstname_user;

        return $this;
    }

    /**
     * Get the value of lastname_user
     *
     * @return  string
     */ 
    public function getLastname_user()
    {
        return $this->lastname_user;
    }

    /**
     * Set the value of lastname_user
     *
     * @param  string  $lastname_user
     *
     * @return  self
     */ 
    public function setLastname_user(string $lastname_user)
    {
        $this->lastname_user = $lastname_user;

        return $this;
    }

    /**
     * Get the value of city_user
     *
     * @return  string
     */ 
    public function getCity_user()
    {
        return $this->city_user;
    }

    /**
     * Set the value of city_user
     *
     * @param  string  $city_user
     *
     * @return  self
     */ 
    public function setCity_user(string $city_user)
    {
        $this->city_user = $city_user;

        return $this;
    }

    /**
     * Get the value of email_user
     *
     * @return  string
     */ 
    public function getEmail_user()
    {
        return $this->email_user;
    }

    /**
     * Set the value of email_user
     *
     * @param  string  $email_user
     *
     * @return  self
     */ 
    public function setEmail_user(string $email_user)
    {
        $this->email_user = $email_user;

        return $this;
    }

    /**
     * Get the value of tel_user
     *
     * @return  string
     */ 
    public function getTel_user()
    {
        return $this->tel_user;
    }

    /**
     * Set the value of tel_user
     *
     * @param  string  $tel_user
     *
     * @return  self
     */ 
    public function setTel_user(string $tel_user)
    {
        $this->tel_user = $tel_user;

        return $this;
    }

    /**
     * Get the value of last_modif
     *
     * @return  string
     */ 
    public function getLast_modif()
    {
        return $this->last_modif;
    }

    /**
     * Set the value of last_modif
     *
     * @param  string  $last_modif
     *
     * @return  self
     */ 
    public function setLast_modif(string $last_modif)
    {
        $this->last_modif = $last_modif;

        return $this;
    }

    /**
     * Get the value of date_created
     *
     * @return  string
     */ 
    public function getDate_created()
    {
        return $this->date_created;
    }

    /**
     * Set the value of date_created
     *
     * @param  string  $date_created
     *
     * @return  self
     */ 
    public function setDate_created(string $date_created)
    {
        $this->date_created = $date_created;

        return $this;
    }

    /**
     * Get the value of password
     *
     * @return  string
     */ 
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set the value of password
     *
     * @param  string  $password
     *
     * @return  self
     */ 
    public function setPassword(string $password)
    {
        $this->password = $password;

        return $this;
    }
}

