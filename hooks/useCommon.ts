import NetworkApi from '@components/api/NetworkApi'
import paths from '@components/api/paths'

export const useCommon = () => {
  const getStateList = () => {
    NetworkApi.get(paths.getStates)
    .then((res) => {
      return res.data
    })
  }
}