export default function buttonsEvents (e, ...fns) {
  
  switch (e.target.id) {
      case "btn-saiyans": fns[0]()
       break
      case "btn-humans": fns[1]()
      break
       case "btn-namekianos": fns[2]()
       break
       case "btn-majin": fns[3]()
      break
       case "btn-frieza-race": fns[4]()
      break
       case "btn-android": fns[5]()
      break
      case "btn-borrar": fns[6]()
      break
   }
 }
