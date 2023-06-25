import useSWR from 'swr'
import type { Key, BareFetcher } from 'swr'
import request from '@/utils/request.ts'
import { PublicConfiguration } from 'swr/_internal'

export default function useRequest<T>(key: Key, config?: Partial<PublicConfiguration<T, any, BareFetcher<T>>>) {
    return useSWR<T>(key, request, config)
}
