import {  Toppings } from '../models/Toppings.interface';

export const MockedToppings: Toppings[] = [

  { id: 1, name: 'chocolate', category: 'inside', price: 0.5, isVegetarian: true, isGlutenFree: true, hasNuts: false, calories: 200, stock: 50 },
  { id: 2, name: 'vanilla', category: 'inside', price: 0.5, isVegetarian: true, isGlutenFree: true, hasNuts: false, calories: 180, stock: 60 },
  { id: 3, name: 'strawberry', category: 'inside', price: 0.5, isVegetarian: true, isGlutenFree: true, hasNuts: false, calories: 150, stock: 40 },
  { id: 4, name: 'sprinkles', category: 'outside', price: 0.2, isVegetarian: true, isGlutenFree: false, hasNuts: false, calories: 50, stock: 0 },
  { id: 5, name: 'chopped nuts', category: 'outside', price: 0.3, isVegetarian: true, isGlutenFree: true, hasNuts: true, calories: 100, stock: 30 }
];
