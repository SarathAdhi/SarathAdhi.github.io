// import React, {useState, useEffect} from 'react'
// import {Card, Stack, Select} from '@sanity/ui'
// import {PatchEvent, set, unset} from 'sanity'

// const TechStackSelectField = ({onChange}) => {
//   const [breeds, setBreeds] = useState([])

//   const getCatBreeds = async () => {
//     const res = await fetch('http://localhost:3000/api/skills', {
//       method: 'GET',
//     })
//     const options = await res.json()

//     const values = options.map((e) => ({
//       title: e.name,
//       value: e.image,
//     }))

//     setBreeds(values)
//   }

//   useEffect(() => {
//     getCatBreeds()
//   }, [])

//   const handleChange = React.useCallback(
//     (event: React.FormEvent<HTMLSelectElement>) => {
//       const inputValue = event.currentTarget.value

//       onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()))
//     },
//     [onChange]
//   )

//   return (
//     <Card padding={0}>
//       <Stack>
//         <Select fontSize={2} padding={[3, 3, 4]} space={[3, 3, 4]} onChange={handleChange}>
//           {breeds.map(({title, value}) => (
//             <option key={value} value={value}>
//               {title}
//             </option>
//           ))}
//         </Select>
//       </Stack>
//     </Card>
//   )
// }

// export default TechStackSelectField
