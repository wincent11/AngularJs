<?php

namespace App\Repository;

use App\Entity\Rest;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Rest|null find($id, $lockMode = null, $lockVersion = null)
 * @method Rest|null findOneBy(array $criteria, array $orderBy = null)
 * @method Rest[]    findAll()
 * @method Rest[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RestRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Rest::class);
    }

    public function findByName(string $name) : array
    {

        return $this->createQueryBuilder('a')
        ->where('a.name LIKE :name')
        ->setParameter('name', '%'.$name.'%')
        ->getQuery()
        ->getResult();
    }

    // /**
    //  * @return Rest[] Returns an array of Rest objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Rest
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
