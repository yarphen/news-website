import { createSelector } from 'reselect';

export const selectorContent = state => state.content;

export const selectorContentItems = createSelector(
  selectorContent,
  state => state.items,
);

export const selectorContentLoading = createSelector(
  selectorContent,
  state => state.loading,
);

export const selectorContentHasMore = createSelector(
  selectorContent,
  state => state.hasMore,
);

export const selectorContentError = createSelector(
  selectorContent,
  state => state.error,
);
