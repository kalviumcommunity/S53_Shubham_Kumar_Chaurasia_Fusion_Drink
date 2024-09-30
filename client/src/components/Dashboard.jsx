import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { fetchRandomCocktails, fetchAlcoholTypes } from '../services/api'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'

function Dashboard() {
  // Fetch random cocktails
  const { data: cocktails, isLoading: cocktailsLoading, error: cocktailsError } = useQuery('randomCocktails', fetchRandomCocktails)

  // Fetch alcohol types
  const { data: alcoholTypes, isLoading: typesLoading, error: typesError } = useQuery('alcoholTypes', fetchAlcoholTypes)

  // Loading state
  if (cocktailsLoading || typesLoading) {
    return <LoadingSkeleton />
  }

  // Error state
  if (cocktailsError || typesError) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load dashboard data. Please try again later.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Cocktail Dashboard</h1>
      
      {/* Random Cocktails Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Random Cocktails</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cocktails.map((cocktail) => (
            <Link key={cocktail.id} to={`/recipe/${cocktail.id}`}>
              <Card>
                <CardContent className="p-4">
                  <img src={cocktail.image} alt={cocktail.name} className="w-full h-48 object-cover mb-4 rounded" />
                  <h3 className="text-lg font-semibold">{cocktail.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Alcohol Types Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Alcohol Types</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {alcoholTypes.map((type) => (
            <Card key={type.id}>
              <CardContent className="p-4 flex flex-col items-center">
                <img src={type.image} alt={type.name} className="w-24 h-24 object-cover rounded-full mb-2" />
                <h3 className="text-lg font-semibold text-center">{type.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

// Loading skeleton component
function LoadingSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-10 w-3/4 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-64 w-full" />
        ))}
      </div>
      <Skeleton className="h-8 w-1/2 mb-4" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {[...Array(10)].map((_, i) => (
          <Skeleton key={i} className="h-32 w-full" />
        ))}
      </div>
    </div>
  )
}

export default Dashboard