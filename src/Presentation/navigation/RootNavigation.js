/**
 * @flow
 */

import React from 'react';

export const navigationRef = React.createRef<any>();

export function navigate(name: string, params: any): void {
  navigationRef.current?.navigate(name, params);
}

export function getCurrentRouteName(): ?string {
  return navigationRef.current?.getCurrentRoute()?.name || null;
}
