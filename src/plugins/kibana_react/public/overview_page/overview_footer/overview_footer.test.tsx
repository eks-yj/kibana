/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import { OverviewFooter } from './overview_footer';
import { shallowWithIntl } from 'test_utils/enzyme_helpers';

jest.mock('../../../../../../src/plugins/kibana_react/public', () => ({
  useKibana: jest.fn().mockReturnValue({
    services: { application: { capabilities: { advancedSettings: { show: true } } } },
  }),
  RedirectAppLinks: jest.fn((element: JSX.Element) => element),
  useUiSetting$: jest.fn().mockReturnValue(['path-to-default-route', jest.fn()]),
}));

afterEach(() => jest.clearAllMocks());

describe('OverviewFooter', () => {
  test('render', () => {
    const component = shallowWithIntl(<OverviewFooter path="new-default-route" />);
    expect(component).toMatchSnapshot();
  });
});
