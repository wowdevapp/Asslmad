import { forwardRef, useEffect, useRef, useState } from 'react'
import useGoogleMapsApi from '../hooks/useGoogleMap'

const LocationInput = forwardRef((props, ref) => {
    const inputRef = useRef()
    const autocompleteRef = useRef()
    const googleMapsApi = useGoogleMapsApi()
    const [local,setPlace]=useState(null);
  
    useEffect(() => {
      if (googleMapsApi) {
        autocompleteRef.current = new googleMapsApi.places.Autocomplete(inputRef.current, { types: ['(cities)'] })
        autocompleteRef.current.addListener('place_changed', () => {
          const place = autocompleteRef.current.getPlace()
          setPlace(place)
        })
      }
    }, [googleMapsApi])
  
    const handleSubmit = (e) => {
      e.preventDefault()
// get lat
        var center = [local.geometry.location.lat(),local.geometry.location.lng()];
        props.setCenter(center);
       
      return false
    }
  
    return (
      <form autoComplete='off'  onSubmit={handleSubmit}>
        <label htmlFor='location'>Location Lookup</label>
        <input
        id='location'
        name='location'
        aria-label='Search locations'
        ref={inputRef}
        placeholder='placeholder'
        autoComplete='off'
        className='w-full py-2 px-2 border-2'
      />
      <button type='submit'>Check local</button>
      </form>
    )
  }
)
  export default LocationInput