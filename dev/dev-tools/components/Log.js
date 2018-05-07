import styled, { css } from 'react-emotion';

import * as React from 'react';
import * as Constants from 'app/common/constants';
import * as Strings from 'app/common/strings';

const STYLES_LOG = css`
  font-family: ${Constants.fontFamilies.mono};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 12px;
  margin-bottom: 12px;
`;

const STYLES_LOG_COL_TIMESTAMP = css`
  color: ${Constants.colors.logTimestamp};
  flex-shrink: 0;
  font-size: 10px;
  margin: 0 8px 4px 0;
  overflow-wrap: break-word;
`;

const STYLES_LOG_COL_CONTEXT = css`
  color: ${Constants.colors.logContext};
  flex-shrink: 0;
  font-size: 10px;
  margin: 0 8px 4px 0;
  text-transform: uppercase;
  overflow-wrap: break-word;
  margin-right: 8px;
`;

const STYLES_LOG_COL_CONTENT = css`
  width: 100%;
  min-width: 25%;
  line-height: 14px;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;

const STYLES_LOG_LEFT = css`
  flex-shrink: 0;
  width: 100px;
`;

const STYLES_LOG_COL_STATUS = css`
  flex-shrink: 0;
  font-size: 10px;
  margin: 0 8px 4px 0;
  text-transform: uppercase;
  overflow-wrap: break-word;
  margin-right: 8px;
`;

export default class Log extends React.Component {
  render() {
    return (
      <div className={STYLES_LOG}>
        <div className={STYLES_LOG_LEFT}>
          {this.props.status ? (
            <div
              className={STYLES_LOG_COL_STATUS}
              style={{
                color: this.props.status ? Constants.status[this.props.status] : undefined,
              }}>
              {this.props.status}
            </div>
          ) : (
            undefined
          )}
          {this.props.time ? (
            <div className={STYLES_LOG_COL_TIMESTAMP}>{Strings.formatTime(this.props.time)}</div>
          ) : (
            undefined
          )}
          {this.props.context ? (
            <div className={STYLES_LOG_COL_CONTEXT}>{this.props.context}</div>
          ) : (
            undefined
          )}
        </div>
        <div
          className={STYLES_LOG_COL_CONTENT}
          style={{ color: this.props.status ? Constants.status[this.props.status] : undefined }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}