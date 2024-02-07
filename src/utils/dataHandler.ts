// export const dataHandler = {
//   get: (key: string) => {
//     const data = localStorage.getItem(key)
//     return data ? JSON.parse(data) : null
//   },
//   set: (key: string, value: any) => {
//     localStorage.setItem(key, JSON.stringify(value))
//   },
//   remove: (key: string) => {
//     localStorage.removeItem(key)
//   }
// }
export const dataHandler = {
	get: <T>(key: string): T | null => {
	  const data = localStorage.getItem(key)
	  return data ? JSON.parse(data) as T : null
	},
	set: <T>(key: string, value: T): void => {
	  localStorage.setItem(key, JSON.stringify(value))
	},
	remove: (key: string): void => {
	  localStorage.removeItem(key)
	}
  }
  