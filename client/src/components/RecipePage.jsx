import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchCocktailById } from '../services/api'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Skeleton } from './ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'

function RecipePage() {
  const { id } = useParams()
  const { data: cocktail, isLoading, error } = useQuery(['cocktail', id], () => fetchCocktailById(id))

  if (isLoading) {
    return <LoadingSkeleton />
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load cocktail data. Please try again later.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{cocktail.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
              <img src={cocktail.image} alt={cocktail.name} className="w-full h-auto rounded-lg" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
              <ul className="list-disc list-inside mb-4">
                {cocktail.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
              <p>{cocktail.instructions}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-3/4" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row">
            <Skeleton className="md:w-1/2 h-64 mb-4 md:mb-0 md:mr-4" />
            <div className="md:w-1/2">
              <Skeleton className="h-6 w-1/4 mb-2" />
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-full mb-1" />
              ))}
              <Skeleton className="h-6 w-1/4 mb-2 mt-4" />
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-full mb-1" />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default RecipePage