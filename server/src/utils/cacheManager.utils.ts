interface CachedData<T> {
  data: T
  lastFetch: number
}

class CacheManager<T> {
  private cache: Record<string, CachedData<T>> = {}

  getFromCache(
    key: string,
    maxAge: number,
  ): { data: T; status: 'HIT' } | { status: 'MISS' } {
    const cachedData = this.cache[key]

    if (cachedData && Date.now() - cachedData.lastFetch <= maxAge) {
      return { data: cachedData.data as T, status: 'HIT' }
    }

    return { status: 'MISS' }
  }

  setCache(key: string, data: T): void {
    const cachedData: CachedData<T> = {
      data,
      lastFetch: Date.now(),
    }
    this.cache[key] = cachedData
  }
}

export default CacheManager
