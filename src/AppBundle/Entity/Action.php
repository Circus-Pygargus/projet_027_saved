<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Action
 *
 * @ORM\Table(name="action")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ActionRepository")
 */
class Action
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
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="date")
     */
    private $date;

    /**
     * @var string
     *
     * @ORM\Column(name="city_start", type="string", length=45, nullable=true)
     */
    private $cityStart;

    /**
     * @var string
     *
     * @ORM\Column(name="city_end", type="string", length=45, nullable=true)
     */
    private $cityEnd;

    /**
     * @var int
     *
     * @ORM\Column(name="km", type="integer", nullable=true)
     */
    private $km;

    /**
     * @var float
     *
     * @ORM\Column(name="taux_km", type="float", nullable=true)
     */
    private $tauxKm;

    /**
     * @var float
     *
     * @ORM\Column(name="other_coast", type="float", nullable=true)
     */
    private $otherCoast;

    /**
     * @var string
     *
     * @ORM\Column(name="nature", type="string", length=45)
     */
    private $nature;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="time_start", type="time", nullable=true)
     */
    private $timeStart;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="time_end", type="time", nullable=true)
     */
    private $timeEnd;

    /**
     * @var float
     *
     * @ORM\Column(name="valorisation", type="float", nullable=true)
     */
    private $valorisation;

    /**
     * @var float
     *
     * @ORM\Column(name="payement", type="float", nullable=true)
     */
    private $payement;

    /**
     * @var float
     *
     * @ORM\Column(name="frais", type="float", nullable=true)
     */
    private $frais;

    /**
     * @var float
     *
     * @ORM\Column(name="don", type="float", nullable=true)
     */
    private $don;

    /**
     * @var int
     *
     * @ORM\Column(name="user_id", type="integer")
     */
    private $userId;

    /**
     * @var int
     *
     * @ORM\Column(name="groupe_classification", type="smallint", nullable=true)
     */
    private $groupeClassification;

    /**
     * @var int
     *
     * @ORM\Column(name="duration_action", type="integer", nullable=true)
     */
    private $durationAction;

    /**
     * @var int
     *
     * @ORM\Column(name="asso_id", type="integer", nullable=true)
     */
    private $assoId;


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
     * Set date
     *
     * @param \DateTime $date
     *
     * @return Action
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set cityStart
     *
     * @param string $cityStart
     *
     * @return Action
     */
    public function setCityStart($cityStart)
    {
        $this->cityStart = $cityStart;

        return $this;
    }

    /**
     * Get cityStart
     *
     * @return string
     */
    public function getCityStart()
    {
        return $this->cityStart;
    }

    /**
     * Set cityEnd
     *
     * @param string $cityEnd
     *
     * @return Action
     */
    public function setCityEnd($cityEnd)
    {
        $this->cityEnd = $cityEnd;

        return $this;
    }

    /**
     * Get cityEnd
     *
     * @return string
     */
    public function getCityEnd()
    {
        return $this->cityEnd;
    }

    /**
     * Set km
     *
     * @param integer $km
     *
     * @return Action
     */
    public function setKm($km)
    {
        $this->km = $km;

        return $this;
    }

    /**
     * Get km
     *
     * @return int
     */
    public function getKm()
    {
        return $this->km;
    }

    /**
     * Set tauxKm
     *
     * @param float $tauxKm
     *
     * @return Action
     */
    public function setTauxKm($tauxKm)
    {
        $this->tauxKm = $tauxKm;

        return $this;
    }

    /**
     * Get tauxKm
     *
     * @return float
     */
    public function getTauxKm()
    {
        return $this->tauxKm;
    }

    /**
     * Set otherCoast
     *
     * @param float $otherCoast
     *
     * @return Action
     */
    public function setOtherCoast($otherCoast)
    {
        $this->otherCoast = $otherCoast;

        return $this;
    }

    /**
     * Get otherCoast
     *
     * @return float
     */
    public function getOtherCoast()
    {
        return $this->otherCoast;
    }

    /**
     * Set nature
     *
     * @param string $nature
     *
     * @return Action
     */
    public function setNature($nature)
    {
        $this->nature = $nature;

        return $this;
    }

    /**
     * Get nature
     *
     * @return string
     */
    public function getNature()
    {
        return $this->nature;
    }

    /**
     * Set timeStart
     *
     * @param \DateTime $timeStart
     *
     * @return Action
     */
    public function setTimeStart($timeStart)
    {
        $this->timeStart = $timeStart;

        return $this;
    }

    /**
     * Get timeStart
     *
     * @return \DateTime
     */
    public function getTimeStart()
    {
        return $this->timeStart;
    }

    /**
     * Set timeEnd
     *
     * @param \DateTime $timeEnd
     *
     * @return Action
     */
    public function setTimeEnd($timeEnd)
    {
        $this->timeEnd = $timeEnd;

        return $this;
    }

    /**
     * Get timeEnd
     *
     * @return \DateTime
     */
    public function getTimeEnd()
    {
        return $this->timeEnd;
    }

    /**
     * Set valorisation
     *
     * @param float $valorisation
     *
     * @return Action
     */
    public function setValorisation($valorisation)
    {
        $this->valorisation = $valorisation;

        return $this;
    }

    /**
     * Get valorisation
     *
     * @return float
     */
    public function getValorisation()
    {
        return $this->valorisation;
    }

    /**
     * Set payement
     *
     * @param float $payement
     *
     * @return Action
     */
    public function setPayement($payement)
    {
        $this->payement = $payement;

        return $this;
    }

    /**
     * Get payement
     *
     * @return float
     */
    public function getPayement()
    {
        return $this->payement;
    }

    /**
     * Set frais
     *
     * @param float $frais
     *
     * @return Action
     */
    public function setFrais($frais)
    {
        $this->frais = $frais;

        return $this;
    }

    /**
     * Get frais
     *
     * @return float
     */
    public function getFrais()
    {
        return $this->frais;
    }

    /**
     * Set don
     *
     * @param float $don
     *
     * @return Action
     */
    public function setDon($don)
    {
        $this->don = $don;

        return $this;
    }

    /**
     * Get don
     *
     * @return float
     */
    public function getDon()
    {
        return $this->don;
    }

    /**
     * Set userId
     *
     * @param integer $userId
     *
     * @return Action
     */
    public function setUserId($userId)
    {
        $this->userId = $userId;

        return $this;
    }

    /**
     * Get userId
     *
     * @return int
     */
    public function getUserId()
    {
        return $this->userId;
    }

    /**
     * Set groupeClassification
     *
     * @param integer $groupeClassification
     *
     * @return Action
     */
    public function setGroupeClassification($groupeClassification)
    {
        $this->groupeClassification = $groupeClassification;

        return $this;
    }

    /**
     * Get groupeClassification
     *
     * @return int
     */
    public function getGroupeClassification()
    {
        return $this->groupeClassification;
    }

    /**
     * Set durationAction
     *
     * @param integer $durationAction
     *
     * @return Action
     */
    public function setDurationAction($durationAction)
    {
        $this->durationAction = $durationAction;

        return $this;
    }

    /**
     * Get durationAction
     *
     * @return int
     */
    public function getDurationAction()
    {
        return $this->durationAction;
    }

    /**
     * Set assoId
     * 
     * @param integer $assoId
     * 
     * @return Action
     */
    public function setAssoId($assoId)
    {
        $this->assoId = $assoId;

        return $this;
    }

    /**
     * Get assoId
     * 
     * @return int
     */
    public function GetAssoId()
    {
        return $this->assoId;
    }
}

